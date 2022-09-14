class RemoveColumnsFromTables < ActiveRecord::Migration[6.1]
  def change
    remove_column :daters, :available?
    remove_column :hires, :dater_review
    remove_column :hires, :matchmaker_review
    remove_column :hires, :terminated_at
    remove_column :matches, :success?
    remove_column :matchmakers, :available?
  end
end
