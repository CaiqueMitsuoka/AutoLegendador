var http = require('http');
var OS = require('opensubtitles-api');
var fs = require('fs');
var path = require('path');
var readline = require('readline');
var dirFile = process.argv[2];
var dirProgram = path.dirname(process.argv[1]);
var objLogin = JSON.parse(fs.readFileSync(dirProgram + '/Login.json'));
var objConfig = JSON.parse(fs.readFileSync(dirProgram + '/config.json'));
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var languages = objConfig.Config.languages;
var chave = '';
var nFiles = 0,nFileProcess = 0, nFileReady = 0;
var ValidExtensions = ['.3g2', '.3gp', '.3gp2', '.3gpp', '.60d', '.ajp', '.asf', '.asx', '.avchd', '.avi', '.bik', '.bix', '.box', '.cam', '.dat', '.divx', '.dmf', '.dv', '.dvr-ms',
'.evo', '.flc', '.fli', '.flic', '.flv', '.flx', '.gvi', '.gvp', '.h264', '.m1v', '.m2p', '.m2ts', '.m2v', '.m4e', '.m4v', '.mjp', '.mjpeg', '.mjpg', '.mkv', '.moov',
'.mov', '.movhd',
'.movie', '.movx', '.mp4', '.mpe', '.mpeg', '.mpg', '.mpv', '.mpv2', '.mxf', '.nsv', '.nut', '.ogg', '.ogm', '.omf', '.ps', '.qt', '.ram', '.rm', '.rmvb', '.swf',
 '.ts', '.vfw', '.vid', '.video', '.viv', '.vivo', '.vob', '.vro', '.wm', '.wmv', '.wmx', '.wrap', '.wvx', '.wx', '.x264', '.xvid'];

var OSub = new OS({
    useragent: objLogin.Login.useragent, //test useragent. To get you own, see readme on GitHub
    username: objLogin.Login.username,
    password: objLogin.Login.password,  //require('crypto').createHash('md5').update('PASSWORD HERE').digest('hex'),
    ssl: objLogin.Login.ssl
});

function ValidFile(file) {
    if(ValidExtensions.indexOf(path.extname(file)) >= 0){
        return true;
    }else{
        return false;
    }
}

function bestSubtitle (objSubtitles){
    var majorScore = -1;
    var bestSub = null;
    var i;
    keys = Object.keys(objSubtitles);
    if (keys == []){
        return null;
    }
    for(i = 0; i < keys.length; i++){
        objSubtitles[keys[i]].forEach(function(subtitle){
            if(subtitle.score > majorScore){
                bestSub = subtitle;
                majorScore = subtitle.score;
            }
        });
    }
    return bestSub;
}
OSub.login()
    .then(function(token){
        console.log('Iniciating AutoLegendador...');
        chave = token;
        console.log(dirFile);
        fs.readdir(dirFile, function callback (err, data) {
            // console.log(data);
            if (err !== null){
                console.error(err);
            }
            data.forEach (function (filename) {
                if (ValidFile(filename)) {
                    console.log(filename);
                    nFiles++;
                    //Video file found !
                    OSub.search({
                        sublanguageid: languages.join(),
                        path: dirFile + '/' + filename,
                        filename: filename,
                        extensions: ['srt'],
                        limit: 'all',
                    }).then(function (subtitles) {
                        subInfo = bestSubtitle(subtitles);
                        if(subInfo != null){
                            subName = filename.replace(path.extname(filename),'.srt');
                            var fileSubtitle = fs.createWriteStream(dirFile + '/' + subName);
                            var request = http.get(subInfo.url, function(response) {
                                response.pipe(fileSubtitle);
                            });
                            nFileReady++;
                        }
                        nFileProcess++;
                        //logout, finalize
                        if (nFiles == nFileProcess){
                            console.log(nFiles + ' files found and ' + nFileReady + ' subtitled');
                            OSub.api.LogOut(chave);
                            console.log('Finished!');
                            rl.question('Press any key to continue....', function(res){
                                rl.close();
                            });
                        }
                    });
                }
            });
        });
    })
    .catch(function(err){
        console.log(err);
});
