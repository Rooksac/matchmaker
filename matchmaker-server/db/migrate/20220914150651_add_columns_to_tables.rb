class AddColumnsToTables < ActiveRecord::Migration[6.1]
  def change
    add_column :daters, :dating_history, :integer, array:true, default:[]
    add_column :matchmakers, :client_history, :integer, array:true, default:[]
    add_column :daters, :matchmaker_history, :integer, array:true, default:[]
  end
end
