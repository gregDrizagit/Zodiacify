class CreateCompatibilities < ActiveRecord::Migration[5.1]
  def change
    create_table :compatibilities do |t|
      t.integer :eastern_id
      t.integer :eastern_partner_id

      t.timestamps
    end
  end
end
