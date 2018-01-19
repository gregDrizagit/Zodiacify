class WesternSerializer < ActiveModel::Serializer
  attributes :id, :sign, :element, :quality, :planet, :img_url, :description
  # has_many :users
end
