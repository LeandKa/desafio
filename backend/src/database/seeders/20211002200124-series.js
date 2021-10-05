'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('shows', [
            {
                Name: 'Game of Thrones',
                categoria_id: 5,
                description:
                    'Game of Thrones é uma série de televisão norte-americana criada por David Benioff e D. B. Weiss, baseada na série de livros A Song of Ice and Fire de George R. R. Martin. Eleita como a melhor série de TV do século XXI em 2020, numa votação popular feita pela revista Digital Spy,',
                rating: 5.0,
                creator: ' George R. R. Martin',
                img: 'https://m.media-amazon.com/images/I/91MJHdDvZAL._AC_SY741_.jpg',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'The Walking Dead',
                categoria_id: 5,
                description:
                    'The Walking Dead é uma série de televisão dramática e pós-apocalíptica norte-americana, desenvolvida por Frank Darabont, e baseada na série em quadrinhos de mesmo nome de Robert Kirkman, Tony Moore e Charlie Adlard.',
                rating: 3.2,
                creator: 'Frank Darabont',
                img: 'https://p2.trrsf.com/image/fget/cf/1200/675/middle/images.terra.com/2021/09/06/1122428976-the-walking-dead-11.jpg',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Judas and the Black Messiah',
                categoria_id: 5,
                description:
                    'The Umbrella Academy é uma série de televisão norte-americana criada por Steve Blackman para a Netflix é baseada na série de histórias em quadrinhos de mesmo nome criada por Gerard Way e ilustrado por Gabriel Bá, publicada pela Dark Horse Comics, tornando-se um sucesso de audiência e se tornando uma das séries mais assistidas da Netflix. A primeira temporada foi lançada na Netflix em 15 de fevereiro de 2019.',
                rating: 3.0,
                creator: 'Steve Blackman',
                img: 'https://br.web.img2.acsta.net/c_310_420/pictures/18/12/10/14/01/0178829.jpg',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'The Boys',
                categoria_id: 5,
                description:
                    'The Boys é uma série de televisão norte americana de super-heróis baseado na serie de histórias em quadrinhos de mesmo nome de Garth Ennis e Darick Robertson. Desenvolvido por Eric Kripke para a plataforma de streaming Prime Video, segue a equipe de justiceiros de mesmo nome que luta contra os Supers, indivíduos superpoderosos que abusam de suas habilidades.',
                rating: 2.5,
                creator: 'Eric Kripke',
                img: 'https://upload.wikimedia.org/wikipedia/pt/8/8e/The_Boys_cartas.jpg',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Vikings',
                categoria_id: 5,
                description:
                    'Vikings é uma série de televisão de drama histórico escrita e criada por Michael Hirst para a emissora History. Filmada na Irlanda, a série estreou em 3 de março de 2013 no Canadá[1] e terminou em 30 de dezembro de 2020 com distribuição em streaming pela Prime Video.',
                rating: 2.5,
                creator: 'Michael Hirst',
                img: 'https://br.web.img3.acsta.net/pictures/19/12/04/22/35/3436063.jpg',
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
