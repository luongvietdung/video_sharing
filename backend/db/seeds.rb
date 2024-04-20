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

puts "== 20240420030917 CreateUsers ======================================"
DEFAULT_PASSWORD = "12345678"
(1..100).each do |i|
  User.find_or_create_by!(email: "seed-user#{i}@example.com") do |u|
    u.password = DEFAULT_PASSWORD
    u.password_confirmation = DEFAULT_PASSWORD
  end
end

# Seed Video

puts "== 20240420030917 CreateVideos ======================================"
urls = [
  'https://www.youtube.com/watch?v=4e-yGcFb_mU',
  'https://www.youtube.com/watch?v=LpLNXd-ubc8'
]

urls.each.with_index(1) do |url, index|
  Video.find_or_create_by!(src: url) do |v|
    v.title = "Seed Title #{index}"
    v.description = "Seed Description #{index}"
  end
end
