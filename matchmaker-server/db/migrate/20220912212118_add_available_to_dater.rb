class AddAvailableToDater < ActiveRecord::Migration[6.1]
  def change
    add_column :daters, :available?, :boolean
  end
end
