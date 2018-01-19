class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :birthdate
  has_one :eastern
  has_one :western
end
