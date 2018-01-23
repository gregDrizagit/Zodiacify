class WesternSerializer < ActiveModel::Serializer
  attributes :id, :sign, :element, :quality, :planet, :img_url, :description, :horoscope
  # has_many :users
end
