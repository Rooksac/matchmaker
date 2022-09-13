class ChangeMatchmakerPasswordType < ActiveRecord::Migration[6.1]
  def change
    change_column :matchmakers, :password, :string
  end
end
