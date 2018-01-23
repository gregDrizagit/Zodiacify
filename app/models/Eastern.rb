class Eastern < ApplicationRecord
  has_many :compatibilities
  has_many :users
  has_many :eastern_partners, through: :compatibilities, foreign_key: :eastern_partner_id
  # has_many :users
  # def compatibilities
  # fires some SQL, by default will look for a column called 'eastern_id' on the compatibilities table
  # end
end
