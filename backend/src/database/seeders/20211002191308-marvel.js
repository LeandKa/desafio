'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('shows', [
            {
                Name: 'Homem Aranha',
                categoria_id: 1,
                description:
                    'O Homem-Aranha (Spider-Man no original) o alter-ego de Peter Parker, é um personagem fictício,para combater os seus inimigos, os criadores deram-lhe super força e agilidade, a habilidade de conseguir aderir na maior parte das superfícies, a possibilidade de disparar teias de aranha através de mecanismos montados nos pulsos (inventados por ele próprio, a que ele chama "lança-teia" - "web-shooters") e consegue reagir precognitivamente ao perigo com o seu "sentido-aranha" ("spider-sense"). Os seus poderes foram adquiridos após ter sido mordido por uma aranha radioativa.',
                rating: 4.0,
                creator: 'Stan Lee',
                img: 'https://upload.wikimedia.org/wikipedia/pt/5/52/Spider-Man.png',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Homem de Ferro',
                categoria_id: 1,
                description:
                    'Homem de Ferro  é um personagem fictício dos quadrinhos publicados pela Marvel Comics.O objetivo de seu criador, Stan Lee, era aceitar o desafio de fazer um personagem ser odiado e depois amado pelo público, assim, criou um dos super heróis mais marcantes de todos os tempos ',
                rating: 3.6,
                creator: 'Stan Lee',
                img: 'https://upload.wikimedia.org/wikipedia/pt/b/be/Invincible_Iron_Man_Vol_2_2.jpg',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Capitã Marvel',
                categoria_id: 1,
                description:
                    'Carol Susan Jane Danvers é uma super-heroína fictícia que aparece nos quadrinhos americanos publicados pela Marvel Comics. Danvers tornou-se a primeira personagem a usar a alcunha Ms. Marvel em Ms. Marvel #1 (janeiro de 1977) depois que seu DNA foi fundido com o de Mar-Vell durante uma explosão, dando-lhe poderes sobre-humanos. ',
                rating: 3.7,
                creator: 'Roy Thomas',
                img: 'https://upload.wikimedia.org/wikipedia/pt/2/20/Captain_Marvel_Vol_9_3.jpg',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Deadpool',
                categoria_id: 1,
                description:
                    'Deadpool (Wade Winston Wilson) é um personagem fictício do universo Marvel, que atua geralmente como anti-herói e ocasionalmente como vilão. Deadpool, cujo nome verdadeiro é Wade Winston Wilson, é um mercenário canadense marcado por ser falastrão, violento e principalmente por ser comediante e a partir ficou conhecido como o "mercenário tagarela". Tem também o fator de cura que o faz sobreviver aos piores ferimentos. ',
                rating: 5.0,
                creator: 'Rob Liefeld',
                img: 'https://upload.wikimedia.org/wikipedia/pt/b/b9/Deadpool.jpg',
                created_at: new Date(),
                updated_at: new Date(),
            },
            {
                Name: 'Capitão América',
                categoria_id: 1,
                description:
                    'Capitão América é um super-herói de histórias em quadrinhos americanos publicado pela Marvel Comics. Capitão América foi concebido como um super-herói patriótico que lutou contra as potências do Eixo na Segunda Guerra Mundial e foi personagem mais popular da Timely Comics durante o período da guerra. A popularidade dos super-heróis diminuiu após a guerra e os quadrinhos Capitão América foram interrompidos em 1950, com uma volta de curta duração em 1953. Em 1964, o personagem foi reintroduzido como participante do Universo Marvel ',
                rating: 5.0,
                creator: 'Joe Simon',
                img: 'https://upload.wikimedia.org/wikipedia/pt/b/bc/Steven_Rogers_%28Earth-616%29.jpg',
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
