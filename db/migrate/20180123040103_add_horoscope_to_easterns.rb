class AddHoroscopeToEasterns < ActiveRecord::Migration[5.1]
  def change
    add_column :easterns, :horoscope, :string
  end
end
