class AddDescriptionToWesterns < ActiveRecord::Migration[5.1]
  def change
    add_column :westerns, :description, :string
  end
end
