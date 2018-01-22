class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :birthdate, :eastern
  has_one :eastern
  # has_many :eastern_partners, through: :eastern
  # has_many :compatibilities, through: :eastern
  # has_many :eastern_partners, through: :compatibilities

  has_one :western
end
