class WesternSerializer < ActiveModel::Serializer
  attributes :id, :sign, :element, :quality, :planet, :img_url, :description, :horoscope
  
end
