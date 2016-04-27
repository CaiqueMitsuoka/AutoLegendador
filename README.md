# AutoLegendador


AutoLegendador é um script que coloca legenda em suas séries por você !


Usando a [OpenSubtitles-API] o AutoLegendador varre a pasta onde foi executado procurando por arquivos de video, busca as legendas para o arquivo, baixa e renomeia, assim suas séries ficam prontas para in-home streaming ou serem exibidas em tvs (através de um dispositvo USB, etc..).



### Instalação:


NodeJS:
```sh
$  curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash
```


OpenSubtitles-API:
```sh
$ npm install opensubtitles-api
```

Para login no servidor do OpenSubtitles será necessário um "UserAgent", "UserName" e "Password".

UserAgent é necessário que você peça para a administração do [OpenSubtitles.org], para você pode seguir as instruções [aqui] (inglês).

UserName e Password é usado do proprio [OpenSubtitles.org].

Coloque as informações no /Login.json

[OpenSubtitles-API]: <https://www.npmjs.com/package/opensubtitles-api>
[OpenSubtitles.org]: <http://www.opensubtitles.org/>
[aqui]: <https://trac.opensubtitles.org/projects/opensubtitles/wiki/DevReadFirst>
