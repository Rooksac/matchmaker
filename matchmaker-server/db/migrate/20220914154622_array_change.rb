class ArrayChange < ActiveRecord::Migration[6.1]
  def change
    remove_column :daters, :dating_history
    remove_column :matchmakers, :client_history
    remove_column :daters, :matchmaker_history
  end
end
