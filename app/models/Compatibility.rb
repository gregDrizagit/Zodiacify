class Compatibility < ApplicationRecord
  belongs_to :eastern, optional: true
  belongs_to :eastern_partner, foreign_key: :eastern_partner_id, :class_name => "Eastern", optional: true
  #
  # after_create :create_inverse, unless: :has_inverse?
  # after_destroy :destroy_inverse, if: :has_inverse?

end
