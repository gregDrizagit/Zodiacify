class CreateTableUser < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :full_name
      t.integer :eastern_id
      t.integer :western_id
      t.datetime :birthdate
    end
  end
end
