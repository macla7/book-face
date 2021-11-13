# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password')

user = User.create(
  first_name: 'Mitch',
  last_name: 'Clark',
  email: 'mitch@bing',
  password: 'Bing123!'
)

user.owned_groups.create(name: 'The Bingos')
user.owned_groups.create(name: 'Campers')
user.memberships.create(group_id: 1, role: 1)
