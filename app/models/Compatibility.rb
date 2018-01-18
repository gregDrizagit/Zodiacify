class Compatibility < ApplicationRecord
  belongs_to :eastern
  belongs_to :eastern_partner, :class_name => "eastern"
end
