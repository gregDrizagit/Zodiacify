class User < ApplicationRecord
  belongs_to :eastern, optional: true
  belongs_to :western, optional: true
end
