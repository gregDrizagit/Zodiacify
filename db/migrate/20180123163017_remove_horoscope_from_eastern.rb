class RemoveHoroscopeFromEastern < ActiveRecord::Migration[5.1]
  def change
    remove_column :easterns, :horoscope
  end
end
