class AddSpaceArray < ActiveRecord::Migration[6.1]
  def change
    change_column :daters, :dating_history, :integer, array: true, default: []
    change_column :matchmakers, :client_history, :integer, array: true, default: []
    change_column :daters, :matchmaker_history, :integer, array: true, default: []
  end
end
