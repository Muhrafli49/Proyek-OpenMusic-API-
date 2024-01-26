/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
    // membuat table playlistsongs
    pgm.createTable("playlistsongs", {
        id: {
            type: "VARCHAR(50)",
            primaryKey: true,
        },
        playlists_id: {
            type: "VARCHAR(50)",
            notNull: true,
        },
        song_id: {
            type: "VARCHAR(50)",
            notNull: true,
        },
    });
}

exports.down = (pgm) => {
    pgm.dropTable("playlistsongs");  
};
