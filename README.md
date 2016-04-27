# AutoLegendador


AutoLegendador é um script que coloca legenda em séries e filmes por você !


Usando a [OpenSubtitles-API] o AutoLegendador varre a pasta onde foi executado procurando por arquivos de video, busca as legendas para o arquivo, baixa e renomeia, assim suas séries ficam prontas para in-home streaming ou serem exibidas em tvs (através de um dispositvo USB, etc..).



AutoLegendador is a script that puts subtitles in you shows!


Using the [OpenSubtitles-API], the AutoLegendador searches the folder for video files, getting the subtitle that fits better and puts in the folder ready to in-home streaming or to put in a USB(to watch on a tv or something else).


## Instalação:
###...Or installation:

NodeJS:
```sh
$  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
$  npm install stable
```


OpenSubtitles-API:
```sh
$ npm install opensubtitles-api -g
```

Para login no servidor do OpenSubtitles será necessário um "UserAgent", "UserName" e "Password".

UserAgent é necessário enviar uma requisição para a administração do [OpenSubtitles.org], para você pode seguir as instruções [aqui] (inglês).

UserName e Password use suas credencias para o [OpenSubtitles.org].

Coloque as informações no /Login.json


O getsub.js usará o primeiro argumento passado a ele quando aberto com o Node, assim usando um "tiquinho" de ShellScript
facilmente automatizamos a tarefa.

Edite o AutoLegendador.sh e substitua PATH, inserindo em seu lugar o caminho onde getSub.js está. (não esqueca do getSub.js no final)

...E pronto!


For the login will be required a "UserAgent", "UserName" and "Password".

The UserAgent needs a requested to a admin of [OpenSubtitles.org], you can find the instruction [here].

For UserName and Password you can use the same credencials of [OpenSubtitles.org]

Put then in /Login.json


The script (getSub.js) will use the first argument passed to him when called with Node, so to call him we use a little ShellScript to run our JS file.

Edit the AutoLegendador.sh em replace PATH to the path of the getSub.js in your computer. (Don't forget to puts getSub.js in the end of the path)

...And we are good to go.
##Como usar:
###...Or how to use:

Copie o AutoLegendador.sh para a pasta onde está os arquivos que deseja legendar e execute:
```sh
$  bash AutoLegendador.sh
```

Copy the AutoLegendador.sh to the folder where the files you want subtitling and run:
```sh
$  bash AutoLegendador.sh
```

[OpenSubtitles-API]: <https://www.npmjs.com/package/opensubtitles-api>
[OpenSubtitles.org]: <http://www.opensubtitles.org/>
[aqui]: <https://trac.opensubtitles.org/projects/opensubtitles/wiki/DevReadFirst>
[aqui]: <https://trac.opensubtitles.org/projects/opensubtitles/wiki/DevReadFirst>
