class EasternSerializer < ActiveModel::Serializer
  attributes :id, :sign, :description, :lucky_number, :lucky_color, :img_url, :eastern_partners
  # has_many :compatibilities
  # has_many :eastern_partners, through: :compatibilities, foreign_key: :eastern_partner_id, source: :eastern
  
end
