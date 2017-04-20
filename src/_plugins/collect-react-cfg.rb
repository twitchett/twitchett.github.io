#
# A one off-tag to collect & return Site config settings for use on the page
# by Javascript.
# The tag iterates over the list of property names in site.react_vars,
# looks up each property value and inserts it into a hash, then returns the hash. 
#
module Jekyll
  
  class CollectReactCfg < Liquid::Tag

    def render(context)
      react_cfg = Hash.new
      site_cfg = context.registers[:site].config
      react_vars = context.registers[:site].config['react_vars']
    
      # keystring e.g. prop.nestedprop.anotherprop
      for keystring in react_vars
        keys = keystring.split('.')
        # ruby syntax is weird
        reduced = keys.reduce(site_cfg) { |acc, key| acc[key] }
        # use only the string after the last '.' as the key
        react_cfg[keys[-1]] = reduced
      end

      react_cfg.to_json  
    end
  end
end

Liquid::Template.register_tag('collect_react_cfg', Jekyll::CollectReactCfg)