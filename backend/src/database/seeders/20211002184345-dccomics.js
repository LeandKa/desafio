'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('shows', [
            {
                Name: 'Batman',
                categoria_id: 2,
                description:
                    'A identidade secreta de Batman é Bruce Wayne, um bilionário americano, playboy, magnata de negócios, filantropo e dono da corporação Wayne Enterprises. Depois de testemunhar o assassinato dos seus pais enquanto criança, Wayne jurou vingança contra os criminosos, um juramento moderado por um sentido de justiça. Wayne treina então física e intelectualmente, e cria uma persona inspirada no morcego para combater o crime',
                rating: 5.0,
                creator: 'Bill Finger',
                img: 'https://upload.wikimedia.org/wikipedia/pt/8/8d/Batman_por_Jim_Lee.jpg',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'SuperMan',
                categoria_id: 2,
                description:
                    'Superman ou Super-Homem é um super-herói fictício de história .Foi mandado à Terra por seu pai, Jor-El, um cientista, momentos antes do planeta explodir.O foguete aterrissou na Terra na cidade de Smallville , onde o jovem Kal-El foi descoberto pelo casal de fazendeiros Jonathan e Martha Kent. Conforme foi crescendo, ele descobriu que tinha habilidades diferentes dos humanos. Quando não está com o tradicional uniforme azul e vermelho, ele vive como Clark Kent, repórter profissional/jornalista no Planeta Diário, junto com Lois Lane e Jimmy Olsen.. ',
                rating: 4.7,
                creator: 'Joe Shuster',
                img: 'https://upload.wikimedia.org/wikipedia/pt/b/be/Super-Homem.jpg',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Mulher Maravilha',
                categoria_id: 2,
                description:
                    'Mulher-Maravilha é uma personagem fictícia de histórias em quadrinhos publicadas pela editora estadunidense DC Comics, originalmente é uma super-heroína guerreira de origem greco-romana, alter ego da Princesa Diana de Themyscira, ilha oculta, também conhecida como Ilha Paraíso, local da civilização de amazonas (como as figuras da lenda grega-romana). Como emissária de Themyscira para o Mundo do Homem, assume o pseudônimo de Diana Prince, identidade secreta que ela adotou para se aproximar da humanidade no Universo DC ',
                rating: 4.7,
                creator: 'William Moulton Marston',
                img: 'https://upload.wikimedia.org/wikipedia/pt/f/f6/Mulher-Maravilha.jpg',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'The Flash',
                categoria_id: 2,
                description:
                    'Barry Allen era funcionário da polícia científica. Aos 11 anos viu sua mãe sendo morta por um velocista, seu pai foi preso e Barry começou a viver com o capitão Darryl Frye (Pós-Crise), e Joe West e Iris West (Serie de TV) quando sofreu um acidente químico, sendo banhado por produtos químicos após seu laboratório ser atingido por um raio. Esse acidente fez que ele, assim como Flash/Jay Garrick, fosse capaz de acessar e canalizar o poder vindo da "Força de Aceleração". sendo, a partir desse momento, capaz de correr em uma velocidade fantástica ',
                rating: 5.0,
                creator: 'Gardner Fox',
                img: 'https://upload.wikimedia.org/wikipedia/pt/2/22/Flash_Pack.jpg',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Lanterna Verde',
                categoria_id: 2,
                description:
                    'Hal Jordan é um piloto de caça, um membro e, ocasionalmente, líder de uma força policial intergaláctica chamada tropa dos Lanternas Verdes, bem como um membro fundador da Liga da Justiça, ao lado de heróis conhecidos como Batman, Superman e Mulher-Maravilha. Ele luta contra o mal através do universo com um anel que lhe dá uma variedade de superpoderes, mas é geralmente retratado como um dos protetores do Setor 2814, que é o setor onde a Terra reside. ',
                rating: 5.0,
                creator: 'John Broome',
                img: 'https://upload.wikimedia.org/wikipedia/pt/8/83/Hal_Jordan_and_the_Green_Lantern_Corps_Vol_1_45_Textless_Variant.jpg',
                created_at: new Date(),
                updated_at: new Date(),
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
