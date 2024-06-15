/* How to create a new Chapter
    copy /capX
    rename 'capX' => 'capN' (N = X + 1)
    rewrite chapter number in line 1 of file: /capN/chapter.js
    all ready :)
*/

const theme = {
    title: 'Linux',
    description: 'Linux es el sistema operativo (SO) open source más utilizado.'
};

const chapters = [
    // ch1
    {
        name: 'Interfaz de Línea de Comandos [CLI]',
        parts: [
            // p1
            {
                name: 'Comandos Escenciales',
                themes: [
                    'man',
                    'clear',
                    'sudo',
                    'history'
                ]
            },
            // p2
            {
                name: 'Comandos básicos de directorios',
                themes: [
                    'pwd',
                    'cd',
                    'ls',
                    'mkdir',
                    'rmdir'
                ]
            },
            // p3
            {
                name: 'Comandos básicos para archivos',
                themes: [
                    'find',
                    'cp',
                    'mv',
                    'rm',
                    'wget',
                    'head',
                    'tail',
                    'grep',
                    'cat',
                    'wc',
                    'less',
                    'touch',
                    'chmod',
                    'unzip',
                    './',
                    'kill',
                    'shred'
                ]
            },
            // p4
            {
                name: 'Otros comandos básicos',
                themes: [
                    'alias',
                    'unalias',
                    'htop',
                    'ps',
                    'ping',
                    'echo',
                    'passwd',
                    'whoami',
                    'uname',
                    'neofetch',
                    'whatis',
                    'exit',
                    'shutdown'
                ]
            }
        ]
    },
    // ch2
    {
        name: 'Arquitectura de permisos',
        parts: [
            // p1
            {
                name: 'Usuarios y Grupos',
                themes: [
                    'Como funciona',
                    'Usuarios',
                    'Grupos'
                ]
            },
            // p2
            {
                name: 'Tipos de permisos',
                themes: [
                    'Niveles de permisos',
                    'Lectura, escritura, y ejecución',
                    'Permisos especiales'
                ]
            },
            // p3
            {
                name: 'Representación de permisos',
                themes: [
                    '...'
                ]
            }
        ]
    },
];
// SMro