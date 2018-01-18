class Compatibility < ApplicationRecord
  belongs_to :ChineseHoroscope
  belongs_to :PartnerChineseHoroscope, :class_name => "Compatibility" 
end
