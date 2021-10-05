'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('shows', [
            {
                Name: 'Poderoso Chefão',
                categoria_id: 4,
                description:
                    'The Godfather (Brasil: O Poderoso Chefão /Portugal: O Padrinho) é um filme norte-americano de 1972, dirigido por Francis Ford Coppola, baseado no livro homônimo escrito por Mario Puzo. É estrelado por Marlon Brando, Al Pacino, James Caan, Richard Castellano, Robert Duvall, Sterling Hayden, John Marley, Richard Conte e Diane Keaton.',
                rating: 5.0,
                creator: ' Mario Puzo',
                img: 'https://upload.wikimedia.org/wikipedia/pt/7/71/Chef%C3%A3o.jpg',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Nomadland',
                categoria_id: 4,
                description:
                    'Nomadland é um filme americano de 2020, do gênero drama, escrito e dirigido por Chloé Zhao. Estrelado por Frances McDormand, David Strathairn, Linda May e Charlene Swankie, teve sua estreia mundial em 11 de setembro de 2020, no Festival de Cinema de Veneza.',
                rating: 3.2,
                creator: 'Chloé Zhao',
                img: 'https://upload.wikimedia.org/wikipedia/pt/9/94/Nomadland_%28cartaz%29.png',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Judas and the Black Messiah',
                categoria_id: 4,
                description:
                    'Judas and the Black Messiah é um filme de drama biográfico estadunidense dirigido por Shaka King. O filme foi escrito por King e Will Berson, baseado na história de Fred Hampton e do Partido dos Panteras Negras nos anos 1960.',
                rating: 3.0,
                creator: 'Shaka King',
                img: 'https://upload.wikimedia.org/wikipedia/pt/c/c1/Judas_and_the_Black_Messiah.png',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Promising Young Woman',
                categoria_id: 4,
                description:
                    'Promising Young Woman é um filme de humor ácido e suspense estadunidense de 2020 dirigido, escrito e co-produzido por Emerald Fennell, em sua estreia como diretora. O filme é estrelado por Carey Mulligan, Bo Burnham, Alison Brie, Clancy Brown, Jennifer Coolidge, Connie Britton e Laverne Cox.',
                rating: 2.5,
                creator: 'Emerald Fennell',
                img: 'https://upload.wikimedia.org/wikipedia/pt/0/0e/Promising_Young_Woman.jpg',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Mank',
                categoria_id: 4,
                description:
                    'Mank é um filme de drama biográfico dirigido e produzido por David Fincher, escrito pelo seu pai Jack Fincher e estrelado por Gary Oldman, Amanda Seyfried, Tom Pelphrey, Lily Collins, Arliss Howard, Tuppence Middleton, Tom Burke e Charles Dance. O filme foi feito em produção com a Netflix e gira em torno da produção do filme Cidadão Kane (1941), nos anos 1930 e 1940 de Hollywood.',
                rating: 2.5,
                creator: 'Jack Fincher',
                img: 'https://upload.wikimedia.org/wikipedia/pt/f/f8/Mank.png',
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
