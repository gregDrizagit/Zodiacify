class EasternSerializer < ActiveModel::Serializer
  attributes :id, :sign, :description, :lucky_number, :lucky_color, :img_url, :eastern_partners, :horoscope
  # has_many :compatibilities
  # has_many :eastern_partners, through: :compatibilities, foreign_key: :eastern_partner_id, source: :eastern
  # has_many :users
end
