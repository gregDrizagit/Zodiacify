class CompatibilitySerializer < ActiveModel::Serializer
  attributes :id, :eastern_id, :eastern_partner_id
  belongs_to :eastern
  belongs_to :eastern_partner, :class_name => "Eastern"
end
