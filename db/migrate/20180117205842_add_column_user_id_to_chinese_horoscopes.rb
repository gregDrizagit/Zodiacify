class AddColumnUserIdToChineseHoroscopes < ActiveRecord::Migration[5.1]
  def change
    add_column :easterns, :user_id, :integer
  end
end
