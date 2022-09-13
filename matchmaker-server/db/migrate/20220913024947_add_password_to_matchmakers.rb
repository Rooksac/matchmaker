class AddPasswordToMatchmakers < ActiveRecord::Migration[6.1]
  def change
    add_column :matchmakers, :password, :integer
  end
end
