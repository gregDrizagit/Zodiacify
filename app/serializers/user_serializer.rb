class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :birthdate, :eastern, :western
  belongs_to :eastern
  # has_many :eastern_partners, through: :eastern
  # has_many :compatibilities, through: :eastern
  # has_many :eastern_partners, through: :compatibilities

  belongs_to :western
end
