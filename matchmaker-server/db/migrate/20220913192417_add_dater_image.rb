class AddDaterImage < ActiveRecord::Migration[6.1]
  def change
    add_column :daters, :image, :string
  end
end
