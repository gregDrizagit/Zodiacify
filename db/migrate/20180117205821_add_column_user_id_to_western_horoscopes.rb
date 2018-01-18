class AddColumnUserIdToWesternHoroscopes < ActiveRecord::Migration[5.1]
  def change
    add_column :westerns, :user_id, :integer
  end
end
