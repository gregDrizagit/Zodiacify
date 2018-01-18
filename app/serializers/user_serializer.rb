class UserSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :eastern, :western
end
