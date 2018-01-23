class User < ApplicationRecord
  has_secure_password
  belongs_to :eastern, optional: true
  belongs_to :western, optional: true
end
