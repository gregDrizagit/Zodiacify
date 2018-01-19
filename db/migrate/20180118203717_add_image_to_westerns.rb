class AddImageToWesterns < ActiveRecord::Migration[5.1]
  def change
    add_column :westerns, :img_url, :string
  end
end
