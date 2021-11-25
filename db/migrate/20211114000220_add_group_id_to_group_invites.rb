class AddGroupIdToGroupInvites < ActiveRecord::Migration[6.1]
  def change
    add_column :group_invites, :group_id, :integer
  end
end
