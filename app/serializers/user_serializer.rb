class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :birthdate
  has_one :eastern
  # has_many :compatibilities, through: :eastern
  # has_many :eastern_partners, through: :compatibilities, foreign_key: :eastern_partner_id, source: :eastern

  has_one :western
end
