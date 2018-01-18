class CreateTableChineseHoroscope < ActiveRecord::Migration[5.1]
  def change
    create_table :easterns do |t|
      t.string :sign
      t.text :description
      t.string :lucky_number
      t.string :lucky_color
      t.string :img_url
    end
  end
end
