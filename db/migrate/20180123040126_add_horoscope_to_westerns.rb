class AddHoroscopeToWesterns < ActiveRecord::Migration[5.1]
  def change
    add_column :westerns, :horoscope, :string
  end
end
