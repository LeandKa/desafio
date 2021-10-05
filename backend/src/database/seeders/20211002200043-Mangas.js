'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('shows', [
            {
                Name: 'Dragon Ball Z',
                categoria_id: 3,
                description:
                    'Dragon Ball Z (ドラゴンボールZ Doragon Bōru Zetto?) (geralmente abreviado como DBZ) foi uma série de animação produzida pela Toei Animation. Baseada na série de mangá Dragon Ball escrita por Akira Toriyama, Dragon Ball Z corresponde aos volumes 17 ao 42 do mangá que foi publicado na revista,',
                rating: 4.0,
                creator: 'Akira Toriyama',
                img: 'https://br.web.img3.acsta.net/c_310_420/pictures/16/03/01/16/59/300795.jpg',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Naruto',
                categoria_id: 3,
                description:
                    'Naruto (ナルト?) é uma série de mangá escrita e ilustrada por Masashi Kishimoto, que conta a história de Naruto Uzumaki, um jovem ninja que constantemente procura por reconhecimento e sonha em se tornar Hokage, o ninja líder de sua vila.  ',
                rating: 4.2,
                creator: 'Masashi Kishimoto',
                img: 'https://upload.wikimedia.org/wikipedia/pt/d/d2/Naruto_vol._01.jpg',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'One Piece',
                categoria_id: 3,
                description:
                    'One Piece (ワンピース Wan Pīsu?) é uma série de mangá escrita e ilustrada por Eiichiro Oda. Os capítulos têm sido serializados na revista Weekly Shōnen Jump desde 22 de julho de 1997, com os capítulos compilados e publicados em 100 volumes tankōbon pela editora Shueisha até setembro de 2021. ',
                rating: 5.0,
                creator: 'Eiichiro Oda',
                img: 'https://upload.wikimedia.org/wikipedia/pt/f/ff/One_Piece_vol._01.jpg',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Pokemon',
                categoria_id: 3,
                description:
                    'Pokémon (ポケモン Pokemon?), abreviação do título japonês Pocket Monsters (ポケットモンスター Poketto Monsutā?, lit. "Monstros de Bolso"), e atualmente anunciado em inglês como Pokémon: The Series, é uma série de anime kodomomuke da franquia Pokémon. ',
                rating: 5.0,
                creator: 'Satoshi Tajiri',
                img: 'https://www.animesgratisbr.biz/wp-content/uploads/2019/01/Pokemon-1-temporada.jpg',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Yu Yu Hakusho',
                categoria_id: 3,
                description:
                    'Yu Yu Hakusho (幽☆遊☆白書 Yū Yū Hakusho?) é uma série de mangá shonen escrita e ilustrada por Yoshihiro Togashi que conta a história de Yusuke Urameshi, um delinquente de quatorze anos de idade que é atingido e morto por um carro ao tentar salvar a vida de uma criança. ',
                rating: 5.0,
                creator: 'Yoshihiro Togashi',
                img: 'https://upload.wikimedia.org/wikipedia/pt/4/4d/YuYu_Hakusho_volume_1.jpg',
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
