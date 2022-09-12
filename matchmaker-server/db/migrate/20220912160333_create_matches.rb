class CreateMatches < ActiveRecord::Migration[6.1]
  def change
    create_table :matches do |t|
      t.integer :dater_id
      t.integer :dated_id
      t.boolean :success?
      t.timestamps
    end
  end
end
