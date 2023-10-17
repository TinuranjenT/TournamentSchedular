import * as pgp from 'pg-promise';

const db = pgp()({
    host: 'localhost',
    port: 5432,
    database: 'match',
    user: 'postgres',
    password: 'Tinu@123',
  });

export class DatabaseService{
    addMatch(team1: string, team2: string, matchDate: Date){
        return db.none('insert into matches (team1, team2, match_date) values ($1, $2, $3)',[team1, team2, matchDate]);
    }
}

