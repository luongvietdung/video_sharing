# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end


# Seed users

DEFAULT_PASSWORD = "12345678"

(1..100).each do |i|
  User.find_or_create_by!(email: "seed-user#{i}@example.com") do |u|
    u.password = DEFAULT_PASSWORD
    u.password_confirmation = DEFAULT_PASSWORD
  end
end
