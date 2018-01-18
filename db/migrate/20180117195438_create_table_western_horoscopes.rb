class CreateTableWesternHoroscopes < ActiveRecord::Migration[5.1]
  def change
    create_table :westerns do |t|
      t.string :sign
      t.string :element
      t.string :quality
      t.string :planet
    end
  end
end
