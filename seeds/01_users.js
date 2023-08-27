/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  await knex('users').del()
  await knex('users').insert([
    {
      user_id: 1,
      name: 'Henrietta Boffin',
      email: 'hboffin@gmail.com',
      telephone: '1-555-345-6789',
      city: 'Brookline',
      website_url: 'linkedin.com/hboffin',
      primary_inst: 'flute',
    },
    {
      user_id: 2,
      name: 'Ned Dennis',
      email: 'ndennis@jmail.com',
      telephone: '1-555-345-6789',
      city: 'Medford',
      website_url: 'linkedin.com/ndennis',
      primary_inst: 'tenor saxophone',
    },
    {
      user_id: 3,
      name: 'James Harthouse',
      email: 'jharthouse@jmail.com',
      telephone: '1-555-345-6789',
      city: 'Malden',
      website_url: 'linked.com/jharthouse',
      primary_inst: 'oboe,'
    },
    {
      user_id: 4,
      name: 'Lucie Manette',
      email: 'lmanette@jmail.com',
      telephone: '1-555-345-6789',
      city: 'Peabody',
      website_url: 'linkedin.com/lmanette',
      primary_inst: 'Bb clarinet',
    },
    {
      user_id: 5,
      name: 'Tom Pinch',
      email: 'tpinch@jmail.com',
      telephone: '1-555-345-6789',
      city: 'Quincy',
      website_url: 'linkedin.com/tpinch',
      primary_inst: 'alto saxophone',
    },
    {
      user_id: 6,
      name: 'Milly Swidger',
      email: 'mswidger@jmail.com',
      telephone: '1-555-345-6789',
      city: 'Lynn',
      website_url: 'linkedin.com/mswidger',
      primary_inst: 'flute',
    },
    {
      user_id: 7,
      name: 'Fred Trent',
      email: 'ftrent@jmail.com',
      telephone: '1-555-345-6789',
      city: 'Braintree',
      website_url: 'linkedin.com/ftrent',
      primary_inst: 'baritone saxophone',
    }
  ]);
};
