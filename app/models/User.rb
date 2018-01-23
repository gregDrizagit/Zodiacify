class User < ApplicationRecord
  has_secure_password
  has_one :eastern
  has_one :western
end
